import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import fetcher from '../../api/fetcher';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const AddProduct = () => {
    const [image, setImage] = useState([])
    const [imgUrl, setImgUrl] = useState('')
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFile) => {
            // console.log(acceptedFile)
            // setImage(acceptedFile)
            setImage(
                acceptedFile.map(upFile => Object.assign(upFile, {
                    preview: URL.createObjectURL(upFile)
                }))
            )
        }
    })
    console.log(imgUrl)
    const onSubmit = async data => {
        // console.log(data)
        const { price, quantity, productName, product, category } = data

        const uploadImage = image[0]
        const url = `https://api.imgbb.com/1/upload?key=b0218fca63a2d42f3b150732dddf9450`
        const formData = new FormData()
        formData.append('image', uploadImage)
        try {
            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                    setImgUrl(data.data.display_url)
                    console.log(data)
                })
        }
        catch (error) {
            console.log(error)
        }

        const products = {
            servicenName: productName,
            category,
            price,
            quantity,
            desc: product,
            ratings: 5,
            img: imgUrl
        }

        const result = await fetcher.post('addServiceProduct', products)
        console.log(result.data)
        if (result.data.acknowledged) {
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Product upload successful',
                showConfirmButton: false,
                timer: 3000
            })
        }
    }




    return (
        <div className='bg-base-200 py-9'>
            <div>
                <form
                    className='w-[70%] mx-auto mt-14 justify-center flex-col items-center'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text mb-[-9px]">Product Name</span>
                        </label>
                        <input
                            type="text"
                            name='name'
                            placeholder="Product Name"
                            className="input input-bordered w-full rounded-full"
                            {...register("productName", {
                                required: {
                                    value: true,
                                    message: 'Product name is Required'
                                },

                            })}

                        />
                        {
                            errors?.name?.type === 'required' && <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                            </label>
                        }
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text mb-[-9px]">Price</span>
                        </label>
                        <input
                            type="text"
                            name='price'
                            placeholder="Price"
                            className="input input-bordered w-full rounded-full"
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: 'Price is Required'
                                },

                            })}
                        />
                        {
                            errors?.price?.type === 'required' && <label className="label">
                                {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                            </label>
                        }
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text mb-[-9px]">Quantity</span>
                        </label>
                        <input
                            type="number"
                            name='quantity'
                            placeholder='Enter product quantity'
                            className="input input-bordered w-full rounded-full"
                            {...register("quantity", {
                                required: {
                                    value: true,
                                    message: 'Product quantity is Required'
                                },

                            })}
                        />

                        {
                            errors?.quantity?.type === 'required' && <label className="label">
                                {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}

                            </label>
                        }

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text mb-[-9px]">Category</span>
                        </label>
                        <input
                            type="number"
                            name='category'
                            placeholder='Enter product quantity'
                            className="input input-bordered w-full rounded-full"
                            {...register("category", {
                                required: {
                                    value: true,
                                    message: 'Product category is Required'
                                },

                            })}
                        />

                        {
                            errors?.category?.type === 'required' && <label className="label">
                                {errors.category?.type === 'required' && <span className="label-text-alt text-red-500">{errors.category.message}</span>}

                            </label>
                        }

                    </div>
                    <div className="form-control mt-9">
                        <textarea
                            className="textarea w-full textarea-bordered h-24"
                            placeholder="Product description"
                            {...register("product", {
                                required: {
                                    value: true,
                                    message: 'Please add your product description'
                                },

                            })}

                        ></textarea>
                        {
                            errors?.product?.type === 'required' && <label className="label">
                                {errors.product?.type === 'required' && <span className="label-text-alt text-red-500">{errors.product.message}</span>}
                            </label>
                        }
                    </div>
                    <div className="form-control border-dotted border-2 border-gray-600 h-56 mt-9 flex justify-center items-center flex-col">
                        <div
                            className=''
                            {...getRootProps()}>
                            <input {...getInputProps()} />
                            {
                                isDragActive ?
                                    <p>Drop the files here ...</p> :
                                    <p>Drag your image for upload Or Click</p>

                            }
                            <div className='mt-9'>
                                {
                                    image.map(upFile => {

                                        return (
                                            <img className='w-[100px] mx-auto' src={upFile.preview} alt="" />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div className='mt-7 text-center'>
                        <button
                            className={`btn bg-slate-700 text-white`}
                        >Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;