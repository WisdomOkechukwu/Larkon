<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CategoryController extends Controller
{
    public function category_list()
    {
        // dd('here');
        $user = Auth::user();

        $category = Category::with('user')
            ->where('company_id', $user->company_id)
            ->orderBy('updated_at', 'desc')
            ->paginate(20);

        $category_count = Category::where('company_id', $user->company_id)->count();

        return view('v1.category.all_categories', compact('category','category_count'));
    }

    public function add_category()
    {
        return view('v1.category.create_category');
    }

    public function create_category(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
            'title' => 'required|string',
        ]);

        $path = $request->file('image')->store('public/images');
        $url = asset(str_replace('public', 'storage', $path));

        $category = new Category();
        $category->name = $request->title;
        $category->image = $url;
        $category->user_id = Auth::user()->id;
        $category->company_id = Auth::user()->company_id;
        $category->save();

        return redirect()->route('category.list')->with(['success' => 'Category Created Successfully']);
    }

    public function show_category($id)
    {
        $category = Category::find($id);

        return view('v1.category.edit_category', compact('category'));
    }

    public function update_category(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
        ]);

        if($request->has('image')){
            $request->validate([
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
                'title' => 'required|string',
            ]);

            $path = $request->file('image')->store('public/images');
            $url = asset(str_replace('public', 'storage', $path));
        }

        $category = Category::find($request->category_id);
        $category->name = $request->title;
        if($request->has('image')){
            $category->image = $url;
        }

        $category->save();

        return redirect()->route('category.list')->with(['success' => 'Category Updated Successfully']);
    }
}
