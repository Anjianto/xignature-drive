<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {

        $assets = $request->query('assets', null);


        if ($assets) {
            $ktp = $this->ktp;
            $selfie = $this->selfie;

            return [
                'data' => [
                    'ktp'                  => $ktp
                        ? 'data:image/' . pathinfo(explode("?", $ktp)[0])["extension"] . ';base64,' . base64_encode(file_get_contents($ktp))
                        : null,
                    'selfie'               => $selfie
                        ? 'data:image/' . pathinfo(explode("?", $selfie)[0])["extension"] . ';base64,' . base64_encode(file_get_contents($selfie))
                        : null,
                ]
            ];
        }


        return [
            'data'          => [
                'id'         => (string)$this->id,
                'type'       => 'user',
                'attributes' => [
                    'storage_capacity'     => $this->settings->storage_capacity,
                    'subscription'         => $this->subscribed('main'),
                    'incomplete_payment'   => $this->hasIncompletePayment('main') ? route('cashier.payment', $this->subscription('main')->latestPayment()->id) : null,
                    'stripe_customer'      => is_null($this->stripe_id) ? false : true,
                    'name'                 => $this->name,
                    'email'                => env('APP_DEMO') ? obfuscate_email($this->email) : $this->email,
                    'phone'                => $this->phone,
                    'nik'                  => $this->nik,
                    'birth_date'           => $this->birth_date,
                    'birth_place'          => $this->birth_place,
                    'avatar'               => $this->avatar,
                    'role'                 => $this->role,
                    'created_at_formatted' => format_date($this->created_at, '%d. %B. %Y'),
                    'created_at'           => $this->created_at,
                    'updated_at'           => $this->updated_at,
                ]
            ],
            'relationships' => [
                'settings'   => [
                    'data' => [
                        'id'         => (string)$this->settings->id,
                        'type'       => 'settings',
                        'attributes' => [
                            'billing_name'         => $this->settings->billing_name,
                            'billing_address'      => $this->settings->billing_address,
                            'billing_state'        => $this->settings->billing_state,
                            'billing_city'         => $this->settings->billing_city,
                            'billing_postal_code'  => $this->settings->billing_postal_code,
                            'billing_country'      => $this->settings->billing_country,
                            'billing_phone_number' => $this->settings->billing_phone_number,
                        ]
                    ]
                ],
                'storage'    => [
                    'data' => [
                        'id'         => '1',
                        'type'       => 'storage',
                        'attributes' => $this->storage
                    ]
                ],
                'favourites' => [
                    'data' => [
                        'id'         => '1',
                        'type'       => 'folders_favourite',
                        'attributes' => [
                            'folders' => $this->favourite_folders->makeHidden(['pivot'])
                        ],
                    ],
                ],
                'tree'       => [
                    'data' => [
                        'id'         => '1',
                        'type'       => 'folders_tree',
                        'attributes' => [
                            'folders' => $this->folder_tree
                        ],
                    ],
                ],
                'timezone'  => [
                    'data' => [
                        'id'        => '1',
                        'type'      => 'timezone',
                        'attributes' => [
                            'timezone'  => $this->settings->timezone
                        ],
                    ]
                ],
            ]
        ];
    }
}
