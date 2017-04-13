var launchOptions = {
  yellow: {
    top: '-44px',
    right: '124px'
  },
  red: {
    top: '122px',
    left: '-45px'
  },
  blue: {
    bottom: '-43px',
    left: '123px'
  },
  green: {
    bottom: '125px',
    right: '-43px'
  }
};

var moveStep = {
  yellow: 1,
  red: 0,
  blue: 0,
  green: 0
};

//状态管理
var moveDetails = {
  yellow: {
    y1: {
      top: '-3px', 
      right: '164px', 
      transform: 'rotate(-180deg)'
    },
    y2: {
      top: '-3px', 
      right: '164px', 
      transform: 'rotate(-180deg)'
    },
    y3: {
      top: '-3px', 
      right: '164px', 
      transform: 'rotate(-180deg)'
    },
    y4: {
      top: '-3px', 
      right: '164px', 
      transform: 'rotate(-180deg)'
    }
  },
  red: {
    r1: {

    },
    r2: {

    },
    r3: {
      
    },
    r4: {
      
    }
  },
  blue: {
    b1: {

    },
    b2: {

    },
    b3: {
      
    },
    b4: {
      
    }
  },
  green: {
    g1: {

    },
    g2: {

    },
    g3: {
      
    },
    g4: {
      
    }
  }
};


function fly(){
  $('#app').off('click', 'img', fly);
  var that = $(this);
  var id = $(this).attr('id');
  var target = id.charAt(0);

  if(!that.hasClass('out')){
  // console.log(123);
    switch(target){
      case 'y':
        that.animate(launchOptions.yellow).css('transform', 'rotate(-135deg)').addClass('out wait');
        return;
      case 'r':
        that.animate(launchOptions.red).css('transform', 'rotate(135deg)').addClass('out wait');
        return;
      case 'b':
        that.animate(launchOptions.blue).css('transform', 'rotate(45deg)').addClass('out wait');
        return;
      case 'g':
        that.animate(launchOptions.green).css('transform', 'rotate(-45deg)').addClass('out wait');
        return;
    }
  } else {
    switch(target){
      case 'y':
        move(that, moveDetails.yellow[id], moveStep.yellow, 'yellow');
        return;
      case 'r':
        move(that, moveDetails.red, moveStep.red, 'red');
        return;
      case 'b':
        move(that, moveDetails.blue, moveStep.blue, 'blue');
        return;
      case 'g':
        move(that, moveDetails.green, moveStep.green, 'green');
        return;
    }
  }

}

function move(elm, options, step, context){
  if(elm.hasClass('wait') && step){
    // console.log(123);
    switch(context.charAt(0)){
      case 'y':
        elm.css(options);
        --step;
        return;
      case 'r':
        move(that, moveDetails.red, moveStep.red, 'red');
        return;
      case 'b':
        move(that, moveDetails.blue, moveStep.blue, 'blue');
        return;
      case 'g':
        move(that, moveDetails.green, moveStep.green, 'green');
        return;
    }
    elm.css(options);
    moveStep[context] = 0;
  }
}

// 掷骰子
function rollDice(context){
  $('#app').on('click', 'img', fly);
  var count = Math.floor(Math.random() * 6) + 1;
  console.log(count);
  switch(context){
    case 'y':
      moveStep.yellow = count;
      return;
    case 'r':
      moveStep.red = count;
      return;
    case 'b':
      moveStep.blue = count;
      return;
    case 'g':
      moveStep.green = count;
      return;
  }
}

$(function(){
  // $('#app').on('click', 'img', fly);
})