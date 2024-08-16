const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 5,
    spaceBetween: 20,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  });

  function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }

  function hideSidebar() {
     const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'

  }



