// app.js
document.getElementById('startGameBtn').addEventListener('click', startGame);
document.getElementById('reloadBtn').addEventListener('click', reloadGame);

const locations = [
    'Bãi biển', 'Trung tâm thương mại', 'Sở cảnh sát', 'Khu rừng', 'Phòng học', 
    'Trại lính', 'Nhà hát', 'Quán cà phê', 'Công viên', 'Sân bay',
    'Rạp chiếu phim', 'Thư viện', 'Trường học', 'Bệnh viện', 'Siêu thị', 
    'Khu vui chơi giải trí', 'Nhà hàng', 'Trạm xăng', 'Đền thờ', 'Câu lạc bộ đêm', 
    'Nhà máy', 'Phòng khám nha khoa', 'Phòng tập gym', 'Chợ đêm', 'Nhà hát',
    'Khu bảo tồn động vật', 'Chuyến tàu', 'Bến cảng', 'Công trường', 'Sân vận động', 
    'Nhà thờ', 'Lâu đài', 'Sân golf', 'Khu căn hộ', 'Tàu du lịch', 'Trung tâm y tế',
    'Vườn thú', 'Khu nghỉ dưỡng', 'Bảo tàng', 'Công viên nước', 'Quảng trường', 
    'Phòng thí nghiệm', 'Học viện quân sự', 'Thành phố dưới nước', 'Đảo hoang', 
    'Trung tâm triển lãm', 'Văn phòng làm việc', 'Phố cổ', 'Làng chài', 'Khu phố cổ', 
    'Khách sạn', 'Trại huấn luyện'
];


function startGame() {
    const numPlayers = parseInt(document.getElementById('numPlayers').value);
    if (numPlayers < 3 || numPlayers > 8) {
        alert('Số lượng người chơi phải từ 3 đến 8.');
        return;
    }

    // Chọn ngẫu nhiên một địa điểm
    const location = locations[Math.floor(Math.random() * locations.length)];
    
    // Chọn một spy ngẫu nhiên
    const spyIndex = Math.floor(Math.random() * numPlayers);

    // Tạo danh sách người chơi với vai trò
    const players = [];
    for (let i = 0; i < numPlayers; i++) {
        players.push({
            name: `Người chơi ${i + 1}`,
            role: i === spyIndex ? 'Spy' : 'Người chơi',
        });
    }

    // Cập nhật giao diện
    document.getElementById('location').textContent = `Địa điểm: ???`;
    
    // Hiển thị danh sách người chơi
    const playersListDiv = document.getElementById('playersList');
    playersListDiv.innerHTML = ''; // Clear list before updating

    players.forEach((player, index) => {
        const playerDiv = document.createElement('div');
        playerDiv.classList.add('player-item');
        playerDiv.textContent = player.name;
        playerDiv.addEventListener('click', () => showPlayerInfo(player, location));

        playersListDiv.appendChild(playerDiv);
    });

    // Hiển thị nút reload game
    document.getElementById('reloadBtn').style.display = 'inline-block';
}

function showPlayerInfo(player, location) {
    // Ẩn địa điểm nếu người chơi là Spy
    const playerInfo = player.role === 'Spy' 
        ? `${player.name} - Vai trò: ${player.role}\nĐịa điểm: Unknown` 
        : `${player.name} - Vai trò: ${player.role}\nĐịa điểm: ${location}`;

    alert(playerInfo);

    // Kiểm tra xem đã hiển thị hết người chơi chưa
    const remainingPlayers = document.querySelectorAll('.player-item');
    if (remainingPlayers.length === 0) {
        document.getElementById('reloadBtn').style.display = 'inline-block';
    }
}

function reloadGame() {
    location.reload();
}
