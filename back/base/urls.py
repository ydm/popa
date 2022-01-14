from django.urls import include, path
from base.rest import router


urlpatterns = [
    path('', include(router.urls)),
]
