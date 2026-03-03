function Navbar() {
  return (
    <nav style={{background:"#0A174E", padding:"20px 10%", color:"white", display:"flex", justifyContent:"space-between"}}>
      <h2>Preeti Consultancy</h2>
      <div>
        <a href="#about" style={{color:"white", marginRight:"20px"}}>About</a>
        <a href="#services" style={{color:"white", marginRight:"20px"}}>Services</a>
        <a href="#contact" style={{color:"white"}}>Contact</a>
      </div>
    </nav>
  )
}

export default Navbar