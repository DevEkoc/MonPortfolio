from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.throttling import AnonRateThrottle
from .serializers import ContactMessageSerializer
from rest_framework.permissions import AllowAny

class ContactMessageCreateView(APIView):
    throttle_classes = [AnonRateThrottle]
    permission_classes = [AllowAny] # Explicitly allow any user # Apply throttling

    def post(self, request, *args, **kwargs):
        serializer = ContactMessageSerializer(data=request.data)
        if serializer.is_valid():
            # Honeypot check: if the honeypot field is filled, it's likely a bot
            if serializer.validated_data.get('honeypot'):
                return Response(status=status.HTTP_200_OK) # Return 200 OK to bots to avoid revealing honeypot

            serializer.save()
            return Response({"message": "Message sent successfully!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)