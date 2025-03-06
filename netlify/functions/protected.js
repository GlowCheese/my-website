exports.handler = async (event) => {
  console.log("🔍 Function được gọi!");
  console.log("📌 Body nhận được:", event.body);

  const { page, password } = JSON.parse(event.body || "{}");

  const pagePasswords = {
    deepmosa: "deeplyinsa",
  };

  if (pagePasswords[page] && pagePasswords[page] === password) {
    console.log("✅ Mật khẩu đúng!");
    return { statusCode: 200, body: JSON.stringify({ access: true }) };
  } else {
    console.log("❌ Sai mật khẩu hoặc không tìm thấy trang!");
    return { statusCode: 401, body: JSON.stringify({ access: false }) };
  }
};
