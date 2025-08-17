from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET'])
def health_check(request):
    """
    Endpoint de santé pour vérifier que l'API fonctionne
    """
    return Response(
        {
            'status': 'ok',
            'message': 'Portfolio API is running',
            'version': 'v1'
        },
        status=status.HTTP_200_OK
    )
