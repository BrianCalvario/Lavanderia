from app.database.db import db
from datetime import datetime

class User(db.Model):
     __tablename__ = "users"
     
     id = db.Column(db.Integer, primary_key = True)
     name = db.Column(db.String(50), nullable = False)
     email = db.Column(db.String(100), nullable = False, unique=True)
     password = db.Column(db.String(255), nullable = False)
     
     rol = db.Column(db.String(20), default="empleado") 
     state = db.Column(db.String(20), default="activo") 
     created_at = db.Column(db.DateTime, default=datetime.now()) 
     
     
