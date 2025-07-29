import { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      feedback: "This is an amazing product! Highly recommend it.",
    },
    {
      id: 2,
      name: "Jane Smith",
      feedback: "Absolutely love it! Will buy again.",
    },
    {
      id: 3,
      name: "Alice Johnson",
      feedback: "Best purchase I've made this year!",
    }
  ];

  const testimonialsContainer= {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rems',
    padding: '1rem'
  }

  const testimonial = {
    display: 'flex',
    flexDirection: 'column',
    gap:'1rem',
    padding:'1rem',
    backgroundColor: 'grey'
  }

  const controls = {
    display:'flex',
    justifyContent:'space-between',
    alignItems: 'center',
    gap:'1rem'
  }


  
  return (
    <section style={testimonialsContainer}>
      <h2>Testimonials</h2>
      <div style={testimonial}>
        <h3>{testimonials[currentIndex].name}</h3>
        <p>{testimonials[currentIndex].feedback}</p>
      </div>
      <div style={controls}>
        <button onClick={() => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)}>Previous</button>
        <button onClick={() => setCurrentIndex((currentIndex + 1) % testimonials.length)}>Next</button>
      </div>
    </section>
  )
}

export default Testimonials;