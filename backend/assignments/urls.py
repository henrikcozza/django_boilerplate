from django.urls import re_path
from rest_framework.routers import DefaultRouter

from assignments.views import AssignmentViewSet


router = DefaultRouter()
router.register(r'^(?P<version>(v1))/assignments', AssignmentViewSet, basename="assignments")
assignments_urlpatterns = router.urls