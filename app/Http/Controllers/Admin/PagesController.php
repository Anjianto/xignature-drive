<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\PageCollection;
use App\Http\Resources\PageResource;
use App\Page;
use Illuminate\Http\Request;

/**
 * @group Page
 *
 * Class PagesController
 * @package App\Http\Controllers\Admin
 */
class PagesController extends Controller
{
    /**
     * Get all pages
     *
     * @return PageCollection
     */
    public function index()
    {
        return new PageCollection(
            Page::sortable()->paginate(10)
        );
    }

    /**
     * Get page resource
     *
     * @urlParam slug string required The Slug of the page. Example: slug-string
     * @param $slug
     * @return PageResource
     */
    public function show($slug)
    {
        return new PageResource(
            Page::where('slug', $slug)->first()
        );
    }

    /**
     * Update page content
     *
     * @urlParam slug string required The Slug of the page. Example: slug-string
     * @param Request $request
     * @param $slug
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function update(Request $request, $slug)
    {
        // Get page
        $page = Page::where('slug', $slug)->first();

        // Update page
        $page->update(make_single_input($request));

        return response('Done', 204);
    }
}
