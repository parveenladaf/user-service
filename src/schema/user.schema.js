module.exports = {
  id: "/userSchema",
  type: "Object",
  properties: {
    name: {
      type: "string",
      description: "userName",
    },
    mobile_no: {
      type: "string",
      description: "mobileNo",
    },
    address: {
      type: "string",
      description: "address",
    },
    email_id: {
      type: "string",
      format: "email",
      description: "email",
    },
  },
  required: ["name", "mobile_no", "address", "email_id"],
};
