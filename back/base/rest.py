from rest_framework import routers, serializers, viewsets
from base.models import Node, Reply


class ReplySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Reply
        fields = ['created', 'modified', 'author', 'body']
        read_only_fields = ['created', 'modified']
        # extra_kwargs = {'body': {'write_only': True}}


class NodeSerializer(serializers.HyperlinkedModelSerializer):
    replies = ReplySerializer(many=True, required=False)

    class Meta:
        model = Node
        fields = ['created', 'modified', 'author', 'title', 'body', 'replies']
        read_only_fields = ['created', 'modified']
        # extra_kwargs = {'body': {'write_only': True}}

    # TODO: Add pagination!
    # def get_queryset(self):
    #     page = int(self.request.GET.get('page', '1'))
    #     print('page=', page)
    #     return Node.objects.all()


# TODO: Take care of pagination, the stupid REST Framework doesn't do
# that out of the box (apparently).
class NodeViewSet(viewsets.ModelViewSet):
    queryset = Node.objects.all()
    serializer_class = NodeSerializer


# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register('nodes', NodeViewSet)
