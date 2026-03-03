function Contact() {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form style={{marginTop:"20px", maxWidth:"500px"}}>
        <input type="text" placeholder="Full Name" style={{width:"100%", padding:"10px", marginBottom:"10px"}} />
        <input type="email" placeholder="Email" style={{width:"100%", padding:"10px", marginBottom:"10px"}} />
        <textarea placeholder="Message" style={{width:"100%", padding:"10px", marginBottom:"10px"}} />
        <button className="btn-primary">Submit</button>
      </form>
    </section>
  )
}

export default Contact