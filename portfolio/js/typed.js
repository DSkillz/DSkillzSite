var MESSAGES = [];


var messagesHandle = {
  init: function (section) {
    if (section == "tech") {
      MESSAGES = [{
          delay: 200,
          text: "<h2>Computer Tech</h2><hr>"
        },
        {
          delay: 700,
          text: "1985: Bill Gates introduces the first ever GUI for what will become the most popular operating system, Windows 1.0<br><br>"
        },
        {
          delay: 2300,
          text: "This is a great day for Microsoft, just born, and a great day for all of us: I will grow up with it.<br><br>"
        },
        {
          delay: 4400,
          text: "A very good pretext for me not to let go of my passion for computers.<br><br>"
        },
        {
          delay: 6800,
          text: "As far back as I can remember, I am curious, and the Personal Computer, being nothing more than a further evolution of the support of knowledge, fascinates me.<br><br>"
        },
        {
          delay: 8200,
          text: "I'll spend the rest of my days shelling the entrails of the machines, analyzing every byte, benchmark it, upgrade it, tweak it, fix it, trash it, change it, mail it, upgrade it, point it, zoom it, press it, snap it, erase it, write it, cut it, paste it, save it, load it, check it, rewrite it, plug it, play it, burn it, rip it, drag and drop it, unzip it, format it, code it...<br><br>"
        }
      ]

      // MESSAGES.push({
      //   delay: 1200,
      //   text: "<h2>Computer Tech</h2><br><hr>"
      // });

    } else if (section == "dev") {
      MESSAGES = [{
        delay: 200,
        text: "<h2>JavaScript Student Dev</h2><hr>"
      },
      {
        delay: 700,
        text: "1995: a language was born, and it will revolutionize our relationship to the Internet in a totally unsuspected way. I'm ten years old and already have my nose in encyclopedias.<br><br>"
      },
      {
        delay: 2600,
        text: "The web pages were not very exciting: they were static, no interactivity possible, simple documents.<br><br>"
      },
      {
        delay: 4700,
        text: "Netscape, fortunately, will come to the rescue. The boss of the most popular navigator of the time, Marc Andreessen, imagines a dynamic web.<br><br>"
      },
      {
        delay: 6400,
        text: "According to him, the web needed a little scripting language that could interact with the DOM. Animation, interaction and other forms of small automation should be part of the web of the future.<br><br>"
      },
      {
        delay: 8300,
        text: "Brendan Eich, engineer at Netscape gets to work: Mocha/LiveScript was born in December 1995.<br><br>"
      },
      {
        delay: 10600,
        text: "Their vision was great.<br><br>"
      },
      {
        delay: 13600,
        text: "Twenty years later, one life would not be enough to describe everything that JavaScript has made possible on the net.<br><br>"
      },
      {
        delay: 15500,
        text: "What started as a simple scripting language has become the most ubiquitous and versatile of programming languages, with an eco-system that many generations of developers will fade away !<br><br>"
      },
      {
        delay: 17700,
        text: "Far is the time of DHTML and its do-it-yourself animations! JS is today a real professional language, object-oriented, strongly typed if necessary with TypeScript, and allows a lot of things !<br><br>"
      },
      {
        delay: 19800,
        text: "Front, back, 3D real time in the browser, augmented reality, embedded systems, IoT, robotics artificial intelligence... the applications are countless.<br><br>"
      },
      {
        delay: 21400,
        text: "And here I am. I am an integral part of this evolution, this field of possibilities. To my great happiness :).<br><br>"
      }
    ]
    } else {
      MESSAGES = [{
        delay: 200,
        text: "<h2>Prospectivist</h2><hr>"
      },
      {
        delay: 600,
        text: "1985-2018: thirty years of technological watch have given me a broad, yet precise, vision of the progress made in science and technology.<br><br>"
      },
      {
        delay: 2100,
        text: "A frequent reader of scientific journals since childhood, technological foresight appears to me, combined with the history of science and rigorous monitoring, as a powerful tool and an original, even strategic discipline.<br><br>"
      },
      {
        delay: 4400,
        text: "Anticipating environmental, societal, scientific and technical developments and thinking about them from a forward-looking perspective allows us to imagine unexpected solutions to current, concrete or potential problems.<br><br>"
      },
      {
        delay: 6300,
        text: "Foresight is a somewhat marginal approach, but has effective tools such as Morphological Analysis, MACTOR, MICMAC, etc... and tends to develop.<br><br>"
      },
      {
        delay: 8300,
        text: "With the dazzling advances in artificial intelligence and its applications in predictive analysis, the future-oriented discipline can greatly gain in importance.<br><br>"
      },
      {
        delay: 10000,
        text: "History of sciences, Technological and Scientific watch, Prospective: past, present, future on solid factual basis...<br><br>"
      }
    ]
    }

  }
}

function type(section) {
  var $animate, $container, $message, $paragraph, animate, initialise, scramble;

  messagesHandle.init(section);

  $container = $("#" + section);

  $message = $("article");

  $animate = $("#animate");

  $paragraph = null;

  scramble = function (element, text, options) {
    var $element, addGlitch, character, defaults, ghostCharacter, ghostCharacters, ghostLength, ghostText, ghosts, glitchCharacter, glitchCharacters, glitchIndex, glitchLength, glitchProbability, glitchText, glitches, i, j, k, letter, object, order, output, parameters, ref, results, settings, shuffle, target, textCharacters, textLength, wrap;
    defaults = {
      probability: 0.15,
      glitches: '-|/\\',
      blank: '',
      duration: text.length * 5,
      ease: 'easeInOutQuad',
      delay: 0
    };
    $element = $(element);
    settings = $.extend(defaults, options);
    shuffle = function () {
      if (Math.random() < 0.5) {
        return 1;
      } else {
        return -1;
      }
    };
    wrap = function (text, classes) {
      return "<span class=\"" + classes + "\">" + text + "</span>";
    };
    glitchText = settings.glitches;
    glitchCharacters = glitchText.split('');
    glitchLength = glitchCharacters.length;
    glitchProbability = settings.probability;
    glitches = (function () {
      var j, len, results;
      results = [];
      for (j = 0, len = glitchCharacters.length; j < len; j++) {
        letter = glitchCharacters[j];
        results.push(wrap(letter, 'glitch'));
      }
      return results;
    })();
    ghostText = $element.text();
    ghostCharacters = ghostText.split('');
    ghostLength = ghostCharacters.length;
    ghosts = (function () {
      var j, len, results;
      results = [];
      for (j = 0, len = ghostCharacters.length; j < len; j++) {
        letter = ghostCharacters[j];
        results.push(wrap(letter, 'ghost'));
      }
      return results;
    })();
    textCharacters = text.split('');
    textLength = textCharacters.length;
    order = (function () {
      results = [];
      for (var j = 0; 0 <= textLength ? j < textLength : j > textLength; 0 <= textLength ? j++ : j--) {
        results.push(j);
      }
      return results;
    }).apply(this).sort(this.shuffle);
    output = [];
    for (i = k = 0, ref = textLength; 0 <= ref ? k < ref : k > ref; i = 0 <= ref ? ++k : --k) {
      glitchIndex = Math.floor(Math.random() * (glitchLength - 1));
      glitchCharacter = glitches[glitchIndex];
      ghostCharacter = ghosts[i] || settings.blank;
      addGlitch = Math.random() < glitchProbability;
      character = addGlitch ? glitchCharacter : ghostCharacter;
      output.push(character);
    }
    object = {
      value: 0
    };
    target = {
      value: 1
    };
    parameters = {
      duration: settings.duration,
      ease: settings.ease,
      step: function () {
        var index, l, progress, ref1;
        progress = Math.floor(object.value * (textLength - 1));
        for (i = l = 0, ref1 = progress; 0 <= ref1 ? l <= ref1 : l >= ref1; i = 0 <= ref1 ? ++l : --l) {
          index = order[i];
          output[index] = textCharacters[index];
        }
        return $element.html(output.join(''));
      },
      complete: function () {
        return $element.html(text);
      }
    };
    return $(object).delay(settings.delay).animate(target, parameters);
  };

  animate = function () {
    var data, element, index, j, len, options;
    for (index = j = 0, len = MESSAGES.length; j < len; index = ++j) {
      data = MESSAGES[index];
      element = $paragraph.get(index);
      element.innerText = '';
      options = {
        delay: data.delay
      };
      scramble(element, data.text, options);
    }
  };

  initialise = function () {
    var index, j, len, text;
    $animate.click(animate);
    for (index = j = 0, len = MESSAGES.length; j < len; index = ++j) {
      text = MESSAGES[index];
      $message.append("<p>");
    }
    $paragraph = $container.find("p");
    animate();
  };

  initialise();
}

$(document).ready(function() { 
  $("#tech").one("mouseenter", function (e) {
    type("tech");
  })
  $("#dev").one("mouseenter", function (e) {
    type("dev");
  })
  $("#prosp").one("mouseenter", function (e) {
    type("prosp");
  })

 });

type("tech");