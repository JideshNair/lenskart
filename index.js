const coupons = ["SAVE10", "WELCOME20", "FREESHIP", "DISCOUNT25", "HOLIDAY30"];
const usedCoupons = new Set(); // Use an in-memory Set for tracking used coupons

exports.handler = async (event) => {
  // Check for available coupons
  const availableCoupons = coupons.filter((code) => !usedCoupons.has(code));

  if (availableCoupons.length === 0) {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: "No more coupon codes available" }),
    };
  }

  // Select the first unused coupon
  const coupon = availableCoupons[0];
  usedCoupons.add(coupon);

  return {
    statusCode: 200,
    body: JSON.stringify({ coupon_code: coupon }),
  };
};
