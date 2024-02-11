from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class SumAPIView(APIView):
    def get(self, request):
        try:
            num1 = float(request.query_params.get('num1'))
            num2 = float(request.query_params.get('num2'))
            result = num1 + num2
            return Response({'result': result}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
