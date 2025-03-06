from django.contrib import admin
from .models import Product,Size,Color, ProductVariant
from django.utils.html import format_html

# Register your models here.
class ColorAdmin(admin.ModelAdmin):
    list_display = ('color_preview', 'name')

    def color_preview(self, obj):
        return format_html(
            '<div style="width: 50px; height: 50px; background-color: {};">&nbsp;</div>',
            obj.code.lower()
        )
    color_preview.short_description = 'Color'

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'category','quantity', 'current_price')
admin.site.register(Color, ColorAdmin)
admin.site.register(Size)
admin.site.register(ProductVariant)
