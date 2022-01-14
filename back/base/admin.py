from django.contrib import admin
from base import models


class NodeAdmin(admin.ModelAdmin):
    pass


class ReplyAdmin(admin.ModelAdmin):
    pass


admin.site.register(models.Node, NodeAdmin)
admin.site.register(models.Reply, ReplyAdmin)
