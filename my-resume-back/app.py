from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'miriamsh888@gmail.com'
app.config['MAIL_PASSWORD'] = os.environ.get('EMAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = 'miriamsh888@gmail.com' 

mail = Mail(app)

@app.route('/send_message', methods=['POST'])
def send_message():
    message = request.json.get('message')
    sender_email = request.json.get('sender_email')
    sender_name = request.json.get('sender_name')

    if not message or not sender_email or not sender_name:
        return jsonify({'err': 'Requred Details Missing'}), 400

    msg = Message('New Message from Your Website', recipients=['miriamsh888@gmail.com'])
    message_body = f"New Message from:{sender_name}\n\n{message}\n\nSender's Email:{sender_email}\n\nHave A Great Day!"
    msg.body = message_body
    mail.send(msg)

    return jsonify({'message': 'Message sent successfully'}), 201
    
if __name__ == '__main__':  
    app.run(debug=False, port=5000, host='0.0.0.0')