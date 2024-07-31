document.addEventListener("DOMContentLoaded", function () {

    const validation = new JustValidate('#form',
        {
            errorFieldCssClass: ['invalid'],
            errorLabelStyle: {
                color: '#D52B1E',
            },
        });

    validation
        .addField('#name', [
            {
                rule: 'required',
                errorMessage: 'Ошибка'
            },
            {
                rule: 'minLength',
                value: 2,
                errorMessage: 'Ошибка'
            },
            {
                rule: 'maxLength',
                value: 30,
                errorMessage: 'Ошибка'
            },
        ])
        .addField('#mail', [
            {
                rule: 'required',
                errorMessage: 'Ошибка'
            },
            {
                rule: 'email',
                errorMessage: 'Ошибка'
            },
        ])
        .addField('#message', [
            {
                rule: 'required',
                errorMessage: 'Ошибка'
            },
            {
                rule: 'minLength',
                value: 5,
                errorMessage: 'Ошибка'
            },
            {
                rule: 'maxLength',
                value: 1000,
                errorMessage: 'Ошибка'
            },
        ])
        .addField('#personal-information', [
            {
                rule: 'required'
            }
        ]);
});