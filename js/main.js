// Arquivo JavaScript principal para o site da Assembleia de Deus Ministério de Madureira - Gurupi

// Document Ready
$(document).ready(function() {
    // Inicialização de componentes
    initBackToTop();
    initSmoothScroll();
    initFormValidation();
    
    // Adicionar classe 'active' ao link de navegação atual
    setActiveNavLink();
});

// Botão Voltar ao Topo
function initBackToTop() {
    var backToTopButton = $('#backToTop');
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            backToTopButton.addClass('active');
        } else {
            backToTopButton.removeClass('active');
        }
    });
    
    backToTopButton.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
}

// Rolagem Suave
function initSmoothScroll() {
    $('a[href*="#"]:not([href="#"])').on('click', function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 70
                }, 800);
                return false;
            }
        }
    });
}

// Validação de Formulários
function initFormValidation() {
    // Formulário de Pedido de Oração
    $('.prayer-form').submit(function(e) {
        e.preventDefault();
        
        var form = $(this);
        var isValid = true;
        
        // Validação simples
        form.find('[required]').each(function() {
            if (!$(this).val()) {
                isValid = false;
                $(this).addClass('is-invalid');
            } else {
                $(this).removeClass('is-invalid');
            }
        });
        
        if (isValid) {
            // Simulação de envio do formulário
            form.find('button[type="submit"]').html('<i class="fas fa-spinner fa-spin"></i> Enviando...').attr('disabled', true);
            
            // Simulação de resposta do servidor após 2 segundos
            setTimeout(function() {
                form.html('<div class="alert alert-success text-center"><i class="fas fa-check-circle"></i> Seu pedido de oração foi enviado com sucesso! Nossa equipe estará orando por você.</div>');
            }, 2000);
        }
    });
    
    // Remover classe 'is-invalid' ao digitar
    $('form input, form textarea').on('input', function() {
        if ($(this).val()) {
            $(this).removeClass('is-invalid');
        }
    });
}

// Definir link de navegação ativo com base na URL atual
function setActiveNavLink() {
    var currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === '' || currentPage === 'index.html') {
        $('.navbar-nav .nav-link[href="index.html"]').addClass('active');
    } else {
        $('.navbar-nav .nav-link[href="' + currentPage + '"]').addClass('active');
    }
}

// Galeria de Fotos (expansão futura)
function initGallery() {
    // Código para inicializar a galeria de fotos com lightbox
    // Será implementado quando as imagens reais estiverem disponíveis
}

// Transmissão ao Vivo (expansão futura)
function initLiveStream() {
    // Código para inicializar a transmissão ao vivo
    // Será implementado quando a integração com plataformas de streaming estiver pronta
}
