from app.database.db import db
from app.models.order import Order
from app.models.garment import Garments
from app.models.order_detail import OrderDetail
from app.models.servise import Service

def create_order(clien_id user_is, estimated_id, total_price):
    order =Order (client_id = client_is, user_id= user_id, estimated_delivery_date= estimated_date, total=total=total_price)
    db.session.add (order)
    db.session.commit()
    return order

def add_garment(order_id, type, ddescription, notes ):
    garment = Garment(order_id= order_id, type=type, description=description, observations=notes)
    db.session.add (garment)
    db.session.commit()
    return garment

def  create_order_detail(garment_id, service_id, quantity):
    order_detail =OrderDetail(garmet_id= garment_id, service_id= service_id, quantity= quantity)
    db.session.add (order_detail)
    db.session.commit()
    return order_detail