from app.database.db import db

class Germent(db.Model):
    __tablename__ ="garments"
    id =db.Column(dbinterger, primary_key = True)
    order_id = db.column (db.interger, db.foreignKey("orders.id"), nullable=False)
    type = db.Column (db.String(50), nillable= False)
    description=db.Column(db.String(200))
    observations=db.Column(db.String(200))
    order_detail = db.relationship("OrderDetail", backref="garment", lazy=True)
    