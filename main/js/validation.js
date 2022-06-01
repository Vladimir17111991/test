const form = document.querySelector('.order__form');
new window.JustValidate('.order__form',
  {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 30,
      },

      mail: {
        required: true,
        email: true,
      }
    },
    colorWrong: '#FF5C00',
    messages: {
      name: {
        required: 'Как Вас зовут?',
        minLength: 'Введите 2 и более символов',
        maxLength: 'Запрещено вводить более 30 символов',
      },
      mail: {
        required: 'Укажите ваш e-mail',
        email: 'Введите корректный e-mail',
      }
    }
  });
