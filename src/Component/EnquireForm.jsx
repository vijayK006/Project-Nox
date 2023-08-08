import React from 'react'

const EnquireForm = () => {
  return (
    <>

<div class="modal fade" id="myModal">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">

      {/* <!-- Modal Header --> */}
      <div class="modal-header">
        <h4 class="modal-title">Enquire Now</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      {/* <!-- Modal body --> */}
      <div class="modal-body">
      <form>
 <input type='text' className='form-control mt-2 mb-2' placeholder='Enter Your Name' required/>
        <div className='row'>
<div className='col-6'>
<input type='number' className='form-control mt-2 mb-2' placeholder='Enter Your Mobile Number' required/>
</div>
<div className='col-6'>
<input type='email' className='form-control mt-2 mb-2' placeholder='Enter Your Email' required/>

      </div>
    </div>
      
       <textarea rows="5" cols="5" className='form-control' placeholder='Enter Your Message' required></textarea>
<input type='submit' className='btn btn-danger mt-2' value="Send" style={{width:"200px"}}/>
      </form>
       </div>

      {/* <!-- Modal footer --> */}
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>


    </>
  )
}

export default EnquireForm;
