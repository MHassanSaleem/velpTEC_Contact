//stylesheet for responsiveness to be included in head 

document.head.appendChild(
  Object.assign(document.createElement("style"), {
    type: "text/tailwindcss",
    textContent: `
      @layer components {
        .heading-up{font-size: 45px; line-height: 55px; margin-bottom: 50px;}
        .note1-up{ font-size: 25px; line-height: 30px; margin-bottom: 50px;}
        .form-up{ padding: 61px 49px 10px 49px;}
        .form-control-up{ border: 1px solid #737373; border-radius: 10px; font-size: 20px; line-height: 24px; color: #737373; padding: 12px 25px;}
        .note2-up{font-size: 20px; line-height: 24px;}
        .btn-div-up{height: 71px;}
        .send-btn-up{width: 275px; height: 55px; font-size: 25px; line-height: 30px; border-radius: 12px;bottom:-55px}
    }`,
  })
);
