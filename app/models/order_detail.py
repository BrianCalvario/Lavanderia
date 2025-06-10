from app.database.db impor db

class OrderDetail(db.Model):
    __tablename__ = "oreere _detail"

    id= db.Colum(db.Interger, primary_key =True)
    garment_id =db.Column(db.Interger, db.foreingKey("garments.id"), nullable=False)
    services_id =db.Column(db.Interger, db.foreingKey("services.id"), nullable=False)
    quantity = db.Column(db.Interger, nullable =False)
