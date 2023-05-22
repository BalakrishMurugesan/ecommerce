import React from 'react'

export default function Filter() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-3'>
                    <div class="form-group">

                        <input type="email" class="form-control shadow-sm mb-5 bg-body rounded" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search" />

                    </div>
                </div>
                <div className='col-3'>
                    <select class="form-select mb-5 shadow-sm bg-body rounded" aria-label=".form-select-lg example">
                        <option selected>Category</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                </div>
                <div className='col-3'>
                <select class="form-select mb-5 shadow-sm bg-body rounded" aria-label=".form-select-lg example">
                        <option selected>Filter Amount</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className='col-3'>
                <select class="form-select mb-5 shadow-sm bg-body rounded" aria-label=".form-select-lg example">
                        <option selected>Sort</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

            </div>



        </div>
    )
}
