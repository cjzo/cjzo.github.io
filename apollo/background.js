// From https://github.com/naabvb/fractalExperiments

// Different gradient presets for 24 hours
var gradient_presets = [
    [{ color: "00000c", position: 0 }, { color: "00000c", position: 0 }],
    [{ color: "020111", position: 85 }, { color: "191621", position: 100 }],
    [{ color: "020111", position: 60 }, { color: "20202c", position: 100 }],
    [{ color: "020111", position: 10 }, { color: "3a3a52", position: 100 }],
    [{ color: "20202c", position: 0 }, { color: "515175", position: 100 }],
    [{ color: "40405c", position: 0 }, { color: "6f71aa", position: 80 }, { color: "8a76ab", position: 100 }],
    [{ color: "4a4969", position: 0 }, { color: "7072ab", position: 50 }, { color: "cd82a0", position: 100 }],
    [{ color: "757abf", position: 0 }, { color: "8583be", position: 60 }, { color: "eab0d1", position: 100 }],
    [{ color: "82addb", position: 0 }, { color: "ebb2b1", position: 100 }],
    [{ color: "94c5f8", position: 1 }, { color: "a6e6ff", position: 70 }, { color: "b1b5ea", position: 100 }],
    [{ color: "b7eaff", position: 0 }, { color: "94dfff", position: 100 }],
    [{ color: "9be2fe", position: 0 }, { color: "67d1fb", position: 100 }],
    [{ color: "90dffe", position: 0 }, { color: "38a3d1", position: 100 }],
    [{ color: "57c1eb", position: 0 }, { color: "246fa8", position: 100 }],
    [{ color: "2d91c2", position: 0 }, { color: "1e528e", position: 100 }],
    [{ color: "2473ab", position: 0 }, { color: "1e528e", position: 70 }, { color: "5b7983", position: 100 }],
    [{ color: "1e528e", position: 0 }, { color: "265889", position: 50 }, { color: "9da671", position: 100 }],
    [{ color: "1e528e", position: 0 }, { color: "728a7c", position: 50 }, { color: "e9ce5d", position: 100 }],
    [{ color: "154277", position: 0 }, { color: "576e71", position: 30 }, { color: "e1c45e", position: 70 }, { color: "b26339", position: 100 }],
    [{ color: "163C52", position: 0 }, { color: "4F4F47", position: 30 }, { color: "C5752D", position: 60 }, { color: "B7490F", position: 80 }, { color: "2F1107", position: 100 }],
    [{ color: "071B26", position: 0 }, { color: "071B26", position: 30 }, { color: "8A3B12", position: 80 }, { color: "240E03", position: 100 }],
    [{ color: "010A10", position: 30 }, { color: "59230B", position: 80 }, { color: "2F1107", position: 100 }],
    [{ color: "090401", position: 50 }, { color: "4B1D06", position: 100 }],
    [{ color: "00000c", position: 80 }, { color: "150800", position: 100 }],
  ];
  
  function toCSSGradient(data) {
    var css = "linear-gradient(to bottom, ";
    for (var i = 0; i < data.length; i++) {
      css += " #" + data[i].color + " " + data[i].position + "%";
      if (i < data.length - 1) css += ",";
    }
    return css + ")";
  }
  
  function setGradient(nInx) {
    let inx = -1;
    if (nInx != inx) {
      inx = nInx;
      var data = gradient_presets[inx];
      if (data == null) return;
  
      var css = toCSSGradient(data);
      canvas.elt.style.background = css;
      canvas.elt.style.backgroundImage = '-webkit-' + css;
      canvas.elt.style.backgroundImage = '-moz-' + css;
      canvas.elt.style.backgroundImage = '' + css;
    }
  } 