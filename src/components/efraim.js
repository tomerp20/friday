function Efraim () {
    function hasClassName(inElement, inClassName)
    {
        var regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)');
        return regExp.test(inElement.className);
    }

    function addClassName(inElement, inClassName)
    {
        if (!hasClassName(inElement, inClassName))
            inElement.className = [inElement.className, inClassName].join(' ');
    }

    function removeClassName(inElement, inClassName)
    {
        if (hasClassName(inElement, inClassName)) {
            var regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)', 'g');
            var curClasses = inElement.className;
            inElement.className = curClasses.replace(regExp, ' ');
        }
    }

 

    // function toggleShape()
    // {
    //   var shape = document.getElementById('shape');
    //   if (hasClassName(shape, 'ring')) {
    //     removeClassName(shape, 'ring');
    //     addClassName(shape, 'cube');
    //   } else {
    //     removeClassName(shape, 'cube');
    //     addClassName(shape, 'ring');
    //   }
      
    //   // Move the ring back in Z so it's not so in-your-face.
    //   var stage = document.getElementById('stage');
    //   if (hasClassName(shape, 'ring'))
    //     stage.style.webkitTransform = 'translateZ(-200px)';
    //   else
    //     stage.style.webkitTransform = '';
    // }
    
   
   

        return <div className="efraim"> <div className="controls">
    

      </div>
    
      <div id="container">
        <div id="stage">
          <div id="shape" class="cube backfaces">
            <div className="plane one">1</div>
            <div className="plane two">2</div>
            <div className="plane three">3</div>
            <div className="plane four">4</div>
            <div className="plane five">5</div>
            <div className="plane six">6</div>
            <div className="plane seven">7</div>
            <div className="plane eight">8</div>
            <div className="plane nine">9</div>
            <div className="plane ten">10</div>
            <div className="plane eleven">11</div>
            <div className="plane twelve">12</div>
          </div>
        </div>
      </div>
      </div>
}
export default Efraim