export default {
	async fetch(request: Request): Promise<Response> {
		return new Response(
			`
<!DOCTYPE html>
<html lang="vi">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Trang Cá Nhân - Phạm Vũ Đạt</title>

	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
	/>

	<style>
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		body {
			font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
			background: linear-gradient(135deg, #74ebd5 0%, #9face6 100%);
			min-height: 100vh;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 20px;
		}

		.card {
			background: white;
			width: 100%;
			max-width: 450px;
			border-radius: 20px;
			padding: 40px 30px;
			text-align: center;
			box-shadow: 0 10px 30px rgba(0,0,0,0.15);
		}

		.profile-img {
			width: 150px;
			height: 150px;
			border-radius: 50%;
			object-fit: cover;
			margin-bottom: 20px;
		}

		h1 {
			color: #2c3e50;
			margin-bottom: 10px;
		}

		.bio {
			color: #7f8c8d;
			margin-bottom: 25px;
			line-height: 1.5;
		}

		.contact-info {
			background: #f8f9fa;
			padding: 15px;
			border-radius: 10px;
			text-align: left;
			margin-bottom: 25px;
		}

		.contact-info p {
			margin-bottom: 10px;
		}

		.contact-info a {
			text-decoration: none;
			color: #34495e;
		}

		.social-links {
			display: flex;
			justify-content: center;
			gap: 15px;
		}

		.social-btn {
			width: 45px;
			height: 45px;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			color: white;
			text-decoration: none;
			font-size: 1.2rem;
		}

		.facebook { background: #1877f2; }
		.tiktok { background: black; }
		.whatsapp { background: #25d366; }
		.wechat { background: #07c160; }
	</style>
</head>

<body>

	<div class="card">

		<img
			src="https://via.placeholder.com/150"
			class="profile-img"
		/>

		<h1>PHẠM VŨ ĐẠT</h1>

		<p class="bio">
			Đam mê khám phá công nghệ.
			Có sở thích với âm nhạc và game.
			Luôn không ngừng học hỏi và kết nối.
		</p>

		<div class="contact-info">

			<p>
				📞
				<a href="tel:+84367584529">
					036 7584 529
				</a>
			</p>

			<p>
				✉️
				<a href="mailto:harrisphammm@gmail.com">
					harrisphammm@gmail.com
				</a>
			</p>

		</div>

		<div class="social-links">

			<a
				href="https://facebook.com/harrisphammm"
				class="social-btn facebook"
			>
				F
			</a>

			<a
				href="https://tiktok.com/@harris.dp"
				class="social-btn tiktok"
			>
				T
			</a>

			<a
				href="https://wa.me/84367584529"
				class="social-btn whatsapp"
			>
				W
			</a>

			<a
				href="https://u.wechat.com/harrisphammm"
				class="social-btn wechat"
			>
				C
			</a>

		</div>

	</div>

</body>
</html>
			`,
			{
				headers: {
					"content-type": "text/html;charset=UTF-8",
				},
			}
		);
	},
};
