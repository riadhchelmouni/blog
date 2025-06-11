# backend/blog/serializers.py

from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__' # Include all fields from the Post model
        # Or specify fields: fields = ['id', 'title', 'content', 'image', 'created_at', 'updated_at']