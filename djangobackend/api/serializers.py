from rest_framework import serializers
from .models import Student
class StudentSerializer(serializers.ModelSerializer):
  class Meta:
    model = Student
    fields = ['id', 'name','image','phoneno', 'email','facebook','instagram','linkedin','post','year']