from django.db import models
from django.utils.html import escape


class Node(models.Model):

    created = models.TimeField(auto_now_add=True)
    modified = models.TimeField(auto_now=True)
    author = models.CharField(max_length=32)
    title = models.CharField(max_length=128)
    body = models.TextField(max_length=1024)

    def __str__(self):
        return f'{self.author}: {self.title}'

    @property
    def html(self):
        import markdown
        return markdown.markdown(escape(self.body))

    @property
    def replies(self):
        # TODO: Dummy LIMIT clause.
        return self.reply_set.all()[:128]


class Reply(models.Model):

    created = models.TimeField(auto_now_add=True)
    modified = models.TimeField(auto_now=True)
    node = models.ForeignKey(Node, on_delete=models.CASCADE)
    author = models.CharField(max_length=32)
    body = models.TextField(max_length=256)

    class Meta:
        verbose_name_plural = 'replies'

    def __str__(self):
        excerpt = self.body[:16]
        return f'{self.author}: {excerpt}...'

    @property
    def html(self):
        import markdown
        return markdown.markdown(escape(self.body))
