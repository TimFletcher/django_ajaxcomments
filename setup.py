from distutils.core import setup

setup(
    name = "django_ajaxcomments",
    version = "0.4",
    author = "Tim Fletcher",
    author_email = "tim@timothyfletcher.com",
    description = "Easily add AJAX-based comment functionality to a Django project.",
    license = "BSD",
    url = "http://github.com/TimFletcher/Django-Ajax-Comments",
    packages = [
        "django_ajaxcomments"
    ],
    classifiers = [
        'Development Status :: 4 - Beta',
        'Environment :: Web Environment',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: BSD License',
        'Operating System :: OS Independent',
        'Framework :: Django',
        'Programming Language :: Python',
        'Programming Language :: JavaScript',
    ],
    include_package_data=True,
    setup_requires=['setuptools_git'],
    zip_safe=False,
)