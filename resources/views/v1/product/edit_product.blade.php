@extends('layouts.vertical', ['title' => 'Edit Product'])

@section('css')
    @vite(['node_modules/choices.js/public/assets/styles/choices.min.css'])
@endsection

@section('content')
    <div class="row">
        <div class="col-xl-3 col-lg-4">
            <div class="card">
                <div class="card-body">
                    <img src="{{ $product->image }}" alt="" class="img-fluid rounded bg-light">
                    <div class="mt-3">
                        <h4>{{ $product->name }} <span class="fs-14 text-muted ms-1">({{ $product->category?->name }})</span></h4>
                        <h5 class="text-dark fw-medium mt-3">Price :</h5>
                        <h4 class="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
                            NGN {{ number_format($product->price) }}
                        </h4>
                        <h5 class="text-dark fw-medium mt-3">Stock :</h5>
                        <h4 class="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
                            {{ number_format($product->stock) }}
                        </h4>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-xl-9 col-lg-8 ">
            <form method="POST" action="{{ route('product.update') }}" enctype="multipart/form-data">
                @csrf
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Edit Product Photo</h4>
                    </div>
                    <div class="card-body">
                        <input type="hidden" name="product_id" value="{{ $product->id }}">
                        <input type="file" id="image_input" name="image" class="form-control">
                        @if ($errors->has('image'))
                            <span class="text-danger">{{ $errors->first('image') }}</span>
                        @endif
                        <div id="image_preview" class="mt-3"></div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Product Information</h4>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="mb-3">
                                    <label for="product-name" class="form-label">Product Name</label>
                                    <input type="text" id="product-name" name="name" class="form-control"
                                        placeholder="Product Name" value="{{ $product->name }}" required>
                                    @if ($errors->has('name'))
                                        <span class="text-danger">{{ $errors->first('name') }}</span>
                                    @endif
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <label for="product-categories" class="form-label">Product Categories</label>
                                <select class="form-control" id="product-categories" name="categories" data-choices
                                    data-choices-groups required data-placeholder="Select Categories"
                                    name="choices-single-groups">
                                    <option value="">Choose a categories</option>
                                    @foreach ($category as $c)
                                        <option value="{{ $c->id }}" @if($c->id == $product->category_id) selected @endif>{{ $c->name }}</option>
                                    @endforeach
                                </select>
                                @if ($errors->has('categories'))
                                    <span class="text-danger">{{ $errors->first('categories') }}</span>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Pricing Details</h4>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <label for="product-price" class="form-label">Price</label>
                                <div class="input-group mb-3">
                                    <span class="input-group-text fs-20">NGN</span>
                                    <input type="number" name="price" id="product-price" class="form-control"
                                        placeholder="Enter Price" value="{{ $product->price }}" required>
                                    @if ($errors->has('price'))
                                        <span class="text-danger">{{ $errors->first('price') }}</span>
                                    @endif
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Stock Changes</h4>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-12 mt-2">
                                <div class="mb-3">
                                    <label for="product-brand" class="form-label">Incoming Stocks</label>
                                    <input type="text" id="product-brand" name="incoming_stock" class="form-control"
                                        placeholder="Enter incoming stocks" value="{{ old('incoming_stock') }}">
                                    @if ($errors->has('incoming_stock'))
                                        <span class="text-danger">{{ $errors->first('incoming_stock') }}</span>
                                    @endif
                                </div>

                                <div class="mb-3">
                                    <label for="product-brand" class="form-label">Outgoing Stocks</label>
                                    <input type="text" id="product-brand" name="outgoing_stock" value="{{ old('outgoing_stock') }}" class="form-control"
                                        placeholder="Enter outgoing stocks">
                                    @if ($errors->has('outgoing_stock'))
                                        <span class="text-danger">{{ $errors->first('outgoing_stock') }}</span>
                                    @endif
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-3 bg-light mb-3 rounded">
                    <div class="row justify-content-end g-2">
                        <div class="col-lg-2">
                            <button type="submit" class="btn btn-outline-primary w-100">Update Product</button>
                        </div>
                        <div class="col-lg-2">
                            <a href="#!" class="btn btn-danger w-100" onclick="history.back()">Cancel</a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <script>
        document.getElementById('image_input').addEventListener('change', function(e) {
            const previewContainer = document.getElementById('image_preview');
            previewContainer.innerHTML = '';

            const file = e.target.files[0];

            if (file) {
                const reader = new FileReader();

                reader.onload = function(e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.className = 'preview-image img-fluid';
                    img.style.maxWidth = '100%';
                    img.style.height = 'auto';
                    img.style.maxHeight = '300px';
                    previewContainer.appendChild(img);
                };

                reader.readAsDataURL(file);
            }
        });
    </script>
    
@endsection

@section('script-bottom')
    @vite(['resources/js/pages/ecommerce-product-details.js'])
@endsection
