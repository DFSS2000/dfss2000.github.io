// JavaScript para o painel administrativo da Assembleia de Deus Ministério de Madureira

// Document Ready
$(document).ready(function() {
    // Inicialização de componentes
    initSidebar();
    initNotifications();
    initDropdowns();
    initFormValidation();
    
    // Adicionar classe 'active' ao link de navegação atual
    setActiveNavLink();
});

// Controle da Sidebar
function initSidebar() {
    // Toggle da sidebar
    $('#sidebarToggle').on('click', function() {
        $('body').toggleClass('sidebar-collapsed');
    });
    
    // Fechar sidebar em telas pequenas ao clicar em um item do menu
    if ($(window).width() < 992) {
        $('.menu-item a').on('click', function() {
            $('body').addClass('sidebar-collapsed');
        });
    }
    
    // Ajustar sidebar ao redimensionar a janela
    $(window).resize(function() {
        if ($(window).width() < 992) {
            $('body').addClass('sidebar-collapsed');
        }
    });
}

// Notificações
function initNotifications() {
    $('.header-notification').on('click', function(e) {
        e.preventDefault();
        // Simulação de abertura de dropdown de notificações
        alert('Funcionalidade de notificações será implementada em breve.');
    });
}

// Dropdowns
function initDropdowns() {
    $('.header-user').on('click', function(e) {
        e.preventDefault();
        // Simulação de abertura de dropdown de usuário
        alert('Funcionalidade de perfil de usuário será implementada em breve.');
    });
}

// Validação de Formulários
function initFormValidation() {
    // Validação para formulários de login
    $('#loginForm').submit(function(e) {
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
            // Simulação de login
            form.find('button[type="submit"]').html('<i class="fas fa-spinner fa-spin"></i> Entrando...').attr('disabled', true);
            
            // Simulação de resposta do servidor após 2 segundos
            setTimeout(function() {
                window.location.href = 'admin-dashboard.html';
            }, 2000);
        }
    });
    
    // Validação para formulários de edição
    $('.edit-form').submit(function(e) {
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
            form.find('button[type="submit"]').html('<i class="fas fa-spinner fa-spin"></i> Salvando...').attr('disabled', true);
            
            // Simulação de resposta do servidor após 2 segundos
            setTimeout(function() {
                // Exibir mensagem de sucesso
                var successMessage = '<div class="alert alert-success alert-dismissible fade show" role="alert">' +
                                    'Dados salvos com sucesso!' +
                                    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
                                    '</div>';
                form.before(successMessage);
                
                // Restaurar botão
                form.find('button[type="submit"]').html('Salvar').attr('disabled', false);
                
                // Remover mensagem após 5 segundos
                setTimeout(function() {
                    $('.alert').alert('close');
                }, 5000);
            }, 2000);
        }
    });
    
    // Remover classe 'is-invalid' ao digitar
    $('form input, form textarea, form select').on('input change', function() {
        if ($(this).val()) {
            $(this).removeClass('is-invalid');
        }
    });
}

// Definir link de navegação ativo com base na URL atual
function setActiveNavLink() {
    var currentPage = window.location.pathname.split('/').pop();
    
    $('.sidebar-menu .menu-item').removeClass('active');
    
    if (currentPage === '' || currentPage === 'admin-dashboard.html') {
        $('.sidebar-menu .menu-item a[href="admin-dashboard.html"]').parent().addClass('active');
    } else {
        $('.sidebar-menu .menu-item a[href="' + currentPage + '"]').parent().addClass('active');
    }
}

// Confirmação de exclusão
function confirmDelete(itemName) {
    return confirm('Tem certeza que deseja excluir ' + itemName + '?');
}

// Funções para gerenciamento de conteúdo
function addNewEvent() {
    // Simulação de adição de novo evento
    alert('Funcionalidade de adição de eventos será implementada em breve.');
}

function addNewSermon() {
    // Simulação de adição de novo sermão
    alert('Funcionalidade de adição de sermões será implementada em breve.');
}

function addNewImage() {
    // Simulação de adição de nova imagem
    alert('Funcionalidade de upload de imagens será implementada em breve.');
}

function scheduleStream() {
    // Simulação de agendamento de transmissão
    alert('Funcionalidade de agendamento de transmissões será implementada em breve.');
}

// Funções para gerenciamento de usuários
function addNewUser() {
    // Simulação de adição de novo usuário
    alert('Funcionalidade de adição de usuários será implementada em breve.');
}

function editUser(userId) {
    // Simulação de edição de usuário
    alert('Funcionalidade de edição de usuário será implementada em breve.');
}

function deleteUser(userId) {
    // Simulação de exclusão de usuário
    if (confirmDelete('este usuário')) {
        alert('Usuário excluído com sucesso!');
    }
}

// Funções para gerenciamento de pedidos de oração
function viewPrayer(prayerId) {
    // Simulação de visualização de pedido de oração
    alert('Funcionalidade de visualização de pedidos de oração será implementada em breve.');
}

function markPrayerAsAnswered(prayerId) {
    // Simulação de marcação de pedido como respondido
    alert('Pedido de oração marcado como respondido!');
}

function deletePrayer(prayerId) {
    // Simulação de exclusão de pedido de oração
    if (confirmDelete('este pedido de oração')) {
        alert('Pedido de oração excluído com sucesso!');
    }
}

// Funções para gerenciamento de páginas
function editPage(pageId) {
    // Simulação de edição de página
    alert('Funcionalidade de edição de páginas será implementada em breve.');
}

function previewPage(pageId) {
    // Simulação de visualização prévia de página
    window.open('index.html', '_blank');
}

// Funções para backup e restauração
function backupDatabase() {
    // Simulação de backup do banco de dados
    alert('Backup do banco de dados realizado com sucesso!');
}

function restoreDatabase() {
    // Simulação de restauração do banco de dados
    if (confirm('Tem certeza que deseja restaurar o banco de dados? Esta ação não pode ser desfeita.')) {
        alert('Banco de dados restaurado com sucesso!');
    }
}
