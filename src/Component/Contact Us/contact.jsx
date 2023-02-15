import React from "react";
const Contact=()=>{
    return(
        <>
          <div className="container">
            <div className="row">
                <div className="col-md-9">
<section class="mb-7">

    <h2 class="h1-responsive font-weight-bold text-center my-3">Contact us</h2>
    <p class="text-center w-responsive mx-auto mb-14">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div class="row">

        <div class="col-md-9 mb-md-0 mb-6">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                <div class="row">

                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control"/>
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>
                    
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control"/>
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>

                </div>
               
                <div class="row">
                    <div class="col-md-7">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control"/>
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div>
            
                <div class="row">

                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>

            </form>

            <div class="text-center text-md-left">
            <button type="button" class="btn btn-dark">Send to Us</button>
            </div>
            <div class="status"></div>
        </div>
      
        <div class="col-md-4 text-center">
            <ul class="list-unstyled mb-5">
                <li><i class=""></i>
                    
                    <p>ZORE STORE</p>
                </li>

                <li><i class=""></i>
                    <p>
                        +20 01233456778
                    </p>
                </li>

                <li><i class=""></i>
                    <p>Tanta , gharbia</p>
                </li>
            </ul>
        </div>

    </div>

</section>
                </div>
                <div className="col-md-6">

                </div>
            </div>
          </div>
        </>
    )
}
export default Contact;