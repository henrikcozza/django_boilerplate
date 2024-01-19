from django.test import TestCase, override_settings

from .models import Assignment
from .tasks import task_execute
import time

class AssignmentTests(TestCase):

    def test_task_execute_sum(self):
        assignment = Assignment(
            first_term=13,
            second_term=32,
        )
        assignment.save()
        job_params = {"db_id": assignment.id}
        res = task_execute(job_params)        
        self.assertEqual(res, 45)
