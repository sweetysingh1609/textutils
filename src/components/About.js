import React, {useState} from 'react'
function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    //     border: '2px solid white'
    // })

    let myStyle={
        color : props.mode ==="dark"?"white":"#042743",
        backgroundColor: props.mode ==="dark"?"rgb(16 74 104)":"white",
    
    }

  return (
    <div className='container'>
        <h1 className='my-3'style={{color : props.mode ==="dark"?"white":"#042743"}}>About Us</h1>
            <div className="accordion" id="accordionExample">
    <div className="accordion-item"  style={myStyle}>
        <h2 className="accordion-header" id="headingOne">
        <button style={myStyle}  className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Analyze your text</strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div style={myStyle} className="accordion-body">
            Welcome to our text editor! Our text editor is a powerful tool for editing plain text files, whether you are a writing content or simply need a quick and easy way to create and edit documents. With features like converting to UpperCase, LowerCase, adding style like Italic our text editor is designed to make your work as efficient and streamlined as possible. Try it out today and see how it can transform your workflow!
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
           <strong> Broswer Compatible</strong>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div style={myStyle} className="accordion-body">
            Our text editor is built with a focus on usability and simplicity. It can be used on any browers and system on mobile, desktop or tablets. We have worked hard to create an interface that is intuitive and easy to navigate, so you can focus on your work without getting bogged down by complicated menus or confusing buttons. With just a few clicks make your edits, and save your changes - it's that easy!
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Free to use</strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div style={myStyle} className="accordion-body">
           We are constantly working to improve and update our text editor, adding new features and fixing any bugs that come up. We are dedicated to providing our users with the best possible experience, and we value your feedback and suggestions. If you have any ideas for how we can make our text editor even better, don't hesitate to let us know!
        </div>
        </div>
    </div>
</div>

</div>

  )
}


export default About