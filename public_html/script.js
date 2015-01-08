/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("documents").ready(function(){
    $(".Money").css("background-color","gray");
    
    $('p:last').css('color', 'red');
    
    $('p:gt(1)').css('border-style', 'solid');
    
    $('div:last p:nth-child(3)').css('background-color','cyan')
    
});
