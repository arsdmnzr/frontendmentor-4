import './App.css';
import desk from './desk.svg';
import star from './star.svg'
import minus from './minus.svg';
import plus from './plus.svg';
function App() {
  return (
    <div className="main">
    
      <img src={desk} alt='background'/>
      <div className='container'>
      <div className='box'>
      <div className='faq'>  <img src={star} alt='star'/>
        <h1>FAQs</h1></div>
        <div className='flex'><p>what is Frontend Mentor, and how will it help me?</p>
        <img src={minus} alt='minus'/></div>
        <p className='para'>Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML,
          CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.
        </p>
        <div className='flex'><p>Is Frontend Mentor free?</p><img src={plus} alt='plus'/></div>
        <div className='flex'><p>Can I use Frontend Mentor projects in my portfolio?</p><img src={plus} alt='plus'/></div>
        <div className='flex'><p>How can I get help if I'm stuck on a challenge?</p><img src={plus} alt='plus'/></div>
      </div>
     </div>
    </div>
  );
}

export default App;
