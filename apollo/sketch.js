// From https://github.com/naabvb/fractalExperiments

var canvas;
var loadingIcon;
var forestSize;
var treeRoots = [];
var trunkCoordinates = [];
var createdTrees = [];
var leafs = [];

var field;
var scale;
var bounds;

var setupDone = false;
var startPerlin = false;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.hide();

    // Set background gradient based on presets in background.js
    setGradient(6);

    loadingIcon = document.getElementById('loaderIcon');

    // Probably unnecessary scaling
    if (windowWidth < 100) forestSize = 2;
    else forestSize = random(5, 8);

    let root;

    // Calculate tree root coordinates
    for (let i = 0; i < forestSize; i++) {
        root = createVector(random(0, windowWidth), random(height - 80, height));
        sz = random(5, 10);
        trunkCoordinates.push({ 'root': { ...root }, 'sz': sz }); 
        treeRoots.push({ 'root': root, 'sz': sz });
    }
    treeRoots.sort((a, b) => (a.root.y > b.root.y) ? 1 : -1);
    trunkCoordinates.sort((a, b) => (a.root.y > b.root.y) ? 1 : -1);

    for (let i = 0; i < treeRoots.length; i++) {
        createdTrees.push(new Branch(treeRoots[i]['sz'], treeRoots[i]['root'], 0, i));
    }
    scale = random(8e2, 2e3);

    field = new ParticleSystem();
    field.colors = getColor();
    field.build(2000);
}

function draw() {
    noStroke();

    // Stop stars after two iterations to create stars
    if (!startPerlin && !setupDone) {
        field.render();
        field.render();
    }

    // If mouse clicked, start perlin noise
    if (startPerlin) field.render();
    drawTrees();
    drawLeafs();

    // Clear out loading icons and show canvas
    if (!setupDone) {
        setupDone = true;
        loadingIcon.style.visibility = 'hidden';
        canvas.show();
    }
    noStroke();
}

function drawLeafs() {
    for (let i = 0; i < leafs.length; i++) {
        leafs[i].show();
    }
}

function drawTrees() {
    for (let i = 0; i < treeRoots.length; i++) {
        drawTree(i);
    }
}
function drawTree(a) {
    drawTreeBase(a);
    for (let i = 0; i < createdTrees.length; i++) {
        if (createdTrees[i].treenum == a) {
            createdTrees[i].show();
        }
    }
    drawTreeBase(a);
}

// Draws base on the tree trunk
function drawTreeBase(a) {
    noStroke();
    fill(28, 14, 8);
    ellipseMode(CENTER);
    ellipse(trunkCoordinates[a].root.x, trunkCoordinates[a].root.y + 4, 50, trunkCoordinates[a].sz + 2);
    fill(28, 14, 8);
}

// On mouse click, start perlin noise
function mouseClicked() {
    startPerlin = true;
    fadeOut();
    redraw();
}

function touchStarted() {
    startPerlin = true;
    fadeOut();
    redraw();
}
