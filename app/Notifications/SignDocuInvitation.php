<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Support\Facades\Auth;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\MailMessage;

class SignDocuInvitation extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($token, $filename)
    {
        $this->token = $token;
        $this->filename = $filename;
        $this->user = Auth::user();
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the invitation repersentation of the notificaiton
     * @param mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $url_inv = url('/invitation', ['token' => $this->token]) . '?filename=' . $this->filename;

        return (new MailMessage())
        ->subject(__t('shared_link_email_sign_subject', ['user' => $this->user->name]))
        ->greeting(__t('shared_link_email_sign_greeting'))
        ->line(__t('shared_link_email_sign_user', ['user' => $this->user->name, 'email' => $this->user->email]))
        ->action(__t('shared_link_email_sign_link'), $url_inv)
        ->salutation(__t('shared_link_email_sign_salutation', ['app_name' => get_setting('app_title') ?? 'Xignature Drive']));
    }
}
