/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$('document').ready(function(){
    
    $('#superHumans').accordion({header: "h3"});
    
    $('.what').css('background-color', 'gray');
    
    $('div:last p:nth-child(3)').css('background-color', 'black');
    
    $('p:last').css('color', 'black');
    
    $('p:gt(1)').css('border-style', 'solid');
    
    $('p:first').css({'background-color':'black', 'color':'white'});
    
    $('h1').bind('mouseover',mouseOverMe).bind('mouseout',mouseOutMe);
    
    $('h1').bind('click',mouseClick);
    
    $('replaceWText').bind('click',replaceWText);
    
    $('#randPara').bind('click', addAPara);
    
    $('#removePara').bind('click', removeAPara);
});



function removeAPara(){
    $('#randPara p:last').remove();
}

function addAPara(){
    $('#randPara').append('<p> $Get Money$ </p>');
}

function replaceWText(){
    $('#replaceWText').text('');
}

function mouseOverMe(){
    $('h1').html('page');
}

function mouseOutMe(){
    $('h1').html('About me');
}

function mouseClick(){
    
    $('p').html('DO U LIKE IT?');
}

