document.addEventListener('DOMContentLoaded', function () {
    let users = [
        { id: 1, name: 'John Doe', risky: false, reviewed: false },
        { id: 2, name: 'Jane Smith', risky: true, reviewed: false },
        { id: 3, name: 'Alice Johnson', risky: false, reviewed: false },
        { id: 4, name: 'Bob Anderson', risky: true, reviewed: false },
        { id: 5, name: 'Eva Davis', risky: false, reviewed: false },
    ];

    const userListContainer = document.getElementById('userList');

    function updateUserList() {
        userListContainer.innerHTML = '';

        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('userCard');
            if (user.risky) {
                userCard.classList.add('risky');
            }
            if (user.reviewed) {
                userCard.classList.add('reviewed');
            }

            userCard.innerHTML = `<strong>User ID:</strong> ${user.id}<br>
                                <strong>Name:</strong> ${user.name}<br>
                                <strong>Risky:</strong> ${user.risky ? 'Yes' : 'No'}<br>
                                <strong>Reviewed:</strong> ${user.reviewed ? 'Yes' : 'No'}`;

            userCard.addEventListener('click', function () {
                user.reviewed = !user.reviewed;
                updateUserList();
            });

            userListContainer.appendChild(userCard);
        });
    }

    updateUserList();
});
