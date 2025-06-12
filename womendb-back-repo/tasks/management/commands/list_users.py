from django.core.management.base import BaseCommand
from django.contrib.auth.models import User

class Command(BaseCommand):
    help = "List all users"

    def handle(self, *args, **kwargs):
        users = User.objects.all()
        if users.exists():
            self.stdout.write("List of all users:")
            for user in users:
                self.stdout.write(f"Username: {user.username}, Email: {user.email}, ID: {user.id}")
        else:
            self.stdout.write("No users found.")
