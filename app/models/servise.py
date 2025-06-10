from app.database.db import db

class Service(db.Model):
    __tablename__ ="Services"
    id =db.Column(dbinterger, primary_key = True)
    name = db.Column(db.string(100), nullable=False)
    description = db.Column(db.String(200))
    price =db.Column(db.Float, nullable= False)