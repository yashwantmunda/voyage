export default hijackScroll = () => {
    document.addEventListener('scroll', function(){
        console.log('scrolling');
    });
}

